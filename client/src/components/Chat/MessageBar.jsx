import React, { useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";

import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

import { ImAttachment } from "react-icons/im";
import { useStateProvider } from "@/context/StateContext";
import axios from "axios";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import { reducerCases } from "@/context/constants";

function MessageBar() {
  const [{ userInfo, currentChatUser, socket }, dispatch] = useStateProvider();
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  // close emoji windows
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if(event.target.id !== "emoji-open") {
        if(
          emojiPickerRef.current &&
          !emojiPickerRef.current.contains(event.target) 
          ) {
            setShowEmojiPicker(false);
          }
        }
     };
     document.addEventListener("click", handleOutsideClick);
     return () => {
      document.removeEventListener("click", handleOutsideClick);
     };
  }, []);

  // Emoji sent
  const handleEmojiModal = () => {
    setShowEmojiPicker(!showEmojiPicker);
  }

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage) => (prevMessage += emoji.emoji));

  }

  const sendMessage = async () => {
    try {
      const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
        to: currentChatUser?.id,
        from: userInfo?.id,
        message,
      });

      socket.current.emit("send-msg", {
        to: currentChatUser?.id,
        from: userInfo?.id,
        message: data.message,
      });
      dispatch({ type: reducerCases.ADD_MESSAGE,
      newMessage: {
        ...data.message
      },
      fromSelf: true,
    });

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Emoji"
            id="emoji-open"
            onClick={handleEmojiModal}
          />
          { showEmojiPicker && ( 
            <div className="absolute bottom-24 left-16 z-40" ref={emojiPickerRef}>
            <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark"/>
            </div>
          )}
          <ImAttachment
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Attach File"
          />
        </div>
        <div className="w-full rounded-lg h-10 flex items-center">
          <input
            type="text"
            placeholder="type a message"
            className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="flex w-10 items-center justify-center">
          <button>
            <MdSend
              className="text-panel-header-icon cursor-pointer text-xl"
              title="Send message"
              onClick={sendMessage}
            />
            {/* <FaMicrophone className="text-panel-header-icon cursor-pointer text-xl" title="Record"/>  */}
          </button>
        </div>
      </>
    </div>
  );
}

export default MessageBar;
