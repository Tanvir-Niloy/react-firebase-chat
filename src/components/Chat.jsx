import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";


const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unSubscribe = onSnapshot(q, (queryShot) => {
      let messages = [];
      queryShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unSubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages && messages.map((message)=>(

            <Message key={message.id} message={message}/>
        ))}
      </main>
      {/*-send-message-compnent-*/}
      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
