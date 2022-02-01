import "./styles.css";
import { useFetch } from "./useFetch";

export default function App() {
  const user = {
    login: "souvik1000"
  };
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/${user.login}`
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="App">
      <img src={data.avatar_url} alt="profilePic" width="200px" />
      <p className="mt-2">
        <span className="text-uppercase">
          <strong>Myself</strong>
        </span>{" "}
        {data.name}
      </p>
    </div>
  );
}
