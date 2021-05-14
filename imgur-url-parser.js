// Imgur URL Parser
// Source: Edabit.com

// Create a function that takes an imgur link (as a string) and extracts the unique id and type. 
// Return an object containing the unique id, and a string indicating what type of link it is.
// The link could be pointing to:
//   An album (e.g. http://imgur.com/a/cjh4E)
//   A gallery (e.g. http://imgur.com/gallery/59npG)
//   An image (e.g. http://imgur.com/OzZUNMM)
//   An image (direct link) (e.g. http://i.imgur.com/altd8Ld.png)

// Examples
// imgurUrlParser("http://imgur.com/a/cjh4E") ➞ { id: "cjh4E", type: "album" }
// imgurUrlParser("http://imgur.com/gallery/59npG") ➞ { id: "59npG", type: "gallery" }
// imgurUrlParser("http://i.imgur.com/altd8Ld.png") ➞ { id: "altd8Ld", type: "image" }

// imgurUrlParser('http://imgur.com/a/cjh4E/zip'),'Should work with /zip at the end (Yeah it\'s a real thing!)'
// imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'),'Should work with a #hash at the end'
// imgurUrlParser('www.i.imgur.com/altd8Ld.png'), 'Should work with www. instead of http://'
// imgurUrlParser('i.imgur.com/altd8Ld.png'), 'Should work without http:// and www.'

function imgurUrlParser(url) {
  let parts = url.split("/");
  
  if (parts[parts.length-2] == "a") {
       return  {id: parts[parts.length-1], type: "album"} 
  } 
  else if (parts[parts.length-1].includes("#")) {
    let directLink = parts[parts.length-1];
    let parseDirectLink = directLink.split("#");
    return {id: parseDirectLink[parseDirectLink.length-2], type: parts[parts.length-2]}
  }
  else if (parts[parts.length-2] == "gallery") {
     return  {id: parts[parts.length-1], type: "gallery"}     
  } 
  else if (parts[parts.length-1].includes(".")) {
    let directLink = parts[parts.length-1];
    let parseDirectLink = directLink.split(".");
    return {id: parseDirectLink[parseDirectLink.length-2], type: "image"}
  } 
  else if (parts[parts.length-1] == "zip") {
       return  {id: parts[parts.length-2], type: "album"} 
  }
  else {
        return  {id: parts[parts.length-1], type: "image"} 
  }
}
