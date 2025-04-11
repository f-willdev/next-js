import fs from 'fs/promises';

export default async function Home() {

  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');

  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Teste</h1>
      </main>
  );
}
