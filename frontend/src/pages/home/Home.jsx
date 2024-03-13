import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConverstaion";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className="flex sm:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter justify-center backdrop-blur-lg bg-opacity-0">
      <div className={`${selectedConversation ? "hidden" : ""} sm:block`}>
        <Sidebar
          selectedConversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
        />
      </div>
      <div className={`${selectedConversation ? "" : "hidden"} sm:block`}>
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
