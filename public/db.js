let db;
const request = window.indexedDB.open("employees", 1);

request.onupgradeneeded = (e)=>{
     const db = request.result;
     db.createObjectStore("emp-data", {autoIncrement:true});
};

request.onsuccess = (e)=>{
     db.e.target.result;
     if(navigator.online){
          checkDatabase();
     }
};

request.onerror = (e)=>{
}

function saveRecord(record){
     const transaction = db.transaction(["empData"], "readwrite");
     const empData = transaction.objectStore("empData");
     empData.add(record);
};