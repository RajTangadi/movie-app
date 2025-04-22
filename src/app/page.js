import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;
export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  let homePageContent = null;
   try {
     const results = await fetch(process.env.URL + '/api/homepagecontent/get', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       cache: 'no-store',
     });
 
     if (!results.ok) {
       throw new Error('Failed to fetch data');
     }
 
     const text = await results.text();
     if (text) {
       const data = JSON.parse(text);
       homePageContent = data[0] || null;
     } else {
       console.log('Empty response');
     }
   } catch (error) {
     console.log('Error getting the home page content', error);
   }
 
  return (
    <div>
        {homePageContent && (
         <div className='text-center mb-10 max-w-6xl mx-auto py-10'>
           <h1 className='text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>
             {homePageContent.title}
           </h1>
           <div
           className='sm:text-lg p-4'
             dangerouslySetInnerHTML={{ __html: homePageContent.description }}
           ></div>
         </div>
       )}
       <div>
         <Results results={results} />
       </div>
     </div>
   );
}
