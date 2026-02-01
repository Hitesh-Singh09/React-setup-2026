import { useUsers } from "./hooks/useUsers";

export default function App() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>React Enterprise Starter</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}