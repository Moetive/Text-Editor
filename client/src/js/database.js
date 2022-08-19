import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const textDatabase = await openDB("jate", 1);
  const text = textDatabase.transaction("jate", "readwrite");
  const store = text.objectStore("jate");
  const request = store.add({ id: id, content: content });
  const result = await request;
  console.log('Data has been saved')
};
// console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const textDatabase = await openDB("jate", 1);
  const text = jateData.transaction("jate", "readwrite");
  const objStore = text.objectStore("jate");
  const req = objStore.getAll();
  const result = await req;
};

initdb();
