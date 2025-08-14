/* eslint-disable typescript/no-explicit-any */
export async function requestGraphql(query: string, variables: Record<string, any>): Promise<any> {
 try {
  if (!process.env.GITHUB_ACCESS_TOKEN) {
   console.warn('GitHub access token not found. Some features may not work properly.');
   return { data: null };
  }

  const response = await fetch("https://api.github.com/graphql", {
   method: "POST",
   headers: {
    Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
   },
   body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
   const errorText = await response.text();
   console.error(`GitHub API error: ${response.status} ${response.statusText}`, errorText);
   return { data: null };
  }

  const data = await response.json();
  
  if (data.errors) {
   console.error('GraphQL errors:', data.errors);
   return { data: null };
  }

  return data;
 } catch (error) {
  console.error('Error fetching from GitHub API:', error);
  return { data: null };
 }
}
