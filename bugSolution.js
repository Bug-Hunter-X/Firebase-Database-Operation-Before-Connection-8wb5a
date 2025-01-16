This solution uses async/await to ensure the Firebase app is initialized before any database operation is attempted:

```javascript
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from './firebaseConfig'; //Place your firebaseConfig here

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function fetchData() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); //Simulate some initialization time
    const starCountRef = ref(db, 'stars');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data fetched successfully:', data);
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchData();
```