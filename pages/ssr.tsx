import { InferGetServerSidePropsType } from "next";

type ApiResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
}[];

function Users({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {data.map((el) => (
        <div key={el.id}>
          <p>{el.id}</p>
          <p>{el.name}</p>
          <p>{el.email}</p>
          <p> {el.username}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = (await res.json()) as ApiResponse;

  return { props: { data } };
}

export default Users;
