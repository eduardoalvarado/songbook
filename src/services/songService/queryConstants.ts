export const queryConstants = {
  queries: {
    getSongs: {
      operationName: null,
      query: `{
        getSongs {
          title,
          author,
          verse{
            paragraph
          }
          createdAt
        }
      }`
    },
    getSongById: {
      operationName: null,
      query: `query($id: String!) {
        getSongById(id: $id){
         title
         author
         verse{
           type
          }
        }
      }`,
      variables: {}
    }
  }
}
