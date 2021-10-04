import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics/Statistics";
import stats from "./data/statistical-data.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
