import Board from "@/components/Board/Board";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="">
      {/* header start */}
      <Header />
      {/* header end */}

      {/* board start */}
      <Board />
      {/* board end */}
      <h1>Hello Trello</h1>
    </main>
  );
}
