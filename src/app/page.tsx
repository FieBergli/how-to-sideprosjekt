export default function Home() {
  return (
    <div className=" bg-blue-300 min-h-screen">
      <h1 className="text-center text-black text-5xl py-6">
        Fies Hjemmeside
      </h1>
      <p className="text-2xl py-6 px-6"> Jeg er en engasjert bioinformatikk student ved UiB. Dette er relevant om meg: </p>
      <ul className="py-5">
        <a href="/cv">
          <li className="text-2xl bg-pink-300 px-6 py-4 w-96">
            Trykk her for min: CV! 
          </li>
        </a>
        <a href= "https://www.linkedin.com/connect-services/?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed">
          <li className="text-2xl bg-green-300 px-6 py-4 w-96">
            Trykk her for min: linkdin! 
          </li>
        </a>
      </ul>
    </div>
    
  );
}
