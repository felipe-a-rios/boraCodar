import { MessageBox } from "./components/MessageBox";
import { Profile } from "./components/Profile";
import { ResponseBox } from "./components/ResponseBox";
import { SendMessage } from "./components/SendMessage";
import "./global.css";
export default function App() {
  return (
    <div className="">
      <Profile />
      <MessageBox />
      <div className="flex justify-end">
        <ResponseBox />
      </div>
      <MessageBox />
      <div className="flex justify-end">
        <ResponseBox />
      </div>
      <SendMessage />
    </div>
  );
}
