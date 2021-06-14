export const queryConstants = {
  queries: {
    getSongs: {
      operationName: null,
      query: `{
        getSongs {
          _id
          title
          author
          gender
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
         gender
         verse{
           order
           type
           paragraph
          }
        }
      }`,
      variables: {}
    },
    getSongByString: {
      operationName: null,
      query:`query($attr: String!) {
        getSongByAttr(attr: $attr) {
          _id
          title
          author
          gender
          createdAt
        }
      }`,
      variables: {}
    }
  }
}
