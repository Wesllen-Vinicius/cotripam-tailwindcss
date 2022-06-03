export default function Home() {
          return (
                    <>
                              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                                                  <h1 className="text-grey-900 text-3xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                                            Inicio - Bem Vindo!
                                                  </h1>
                                                  <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                                                            Encontre as musicas
                                                            que combinem com
                                                            voce!
                                                  </p>
                                        </div>
                                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                                  <li className="py-12">
                                                            <article className="md:grid-cols-2 grid gap-3"></article>
                                                  </li>
                                        </ul>
                              </div>
                    </>
          );
}
