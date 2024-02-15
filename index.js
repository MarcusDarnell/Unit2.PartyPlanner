/* setup
1. References to different useful things
2. State
*/

const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/Marcus-Darnell'

let events = [] // state

const eventsContainer = document.getElementById('events') // reference to where Im putting the events





/*
FETCH CALLS
/
/POST
/PUT
/DELETE
*/
async function getEvents() {
  try {
    const response = await fetch(`${BASE_URL}/events`)
    const json = await response.json()

     return json.data //return the events list

  } catch(err) {
  console.error(err)
  }
}








/*
EVENT LISTENERS (click submit etc.)
*/




// Render the updated things on the page




/*
    RENDER FUNCTIONS

    renderEvents() - what we call when GET/POST/PUT/DELETE
        runs to re-render to the DOM

 */

function renderEvents() {
const htmlEvents = events.map(eve => {
  
  
  
    /*
 <Div>
 <img
 <h3
 <p
 </div>
 */

   let div = document.createElement('div')
   div.className = 'card'

    div.innerHTML = `<h3>${eve.name}</h3>
                     <p>${eve.description}<p>
                     <h3>${eve.date}</h3>
                     <h3>${eve.location}<h3>`
    return div
  })
  eventsContainer.replaceChildren(...htmlEvents)
}



async function startApp() {
    //1. grab the events
    events = await getEvents()

  //2. Create a list of events on the dom
  renderEvents()
}
startApp()










 
