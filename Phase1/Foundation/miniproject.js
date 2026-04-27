
import {readFile ,writeFile} from 'fs/promises'

const ProcessData = async()=>{
    try{
 
        console.log("Reading from file ......");
        let RawData = await readFile("./input.json","utf-8");
        let user = JSON.parse(RawData);
        
        const updateUser = user.map(({name,...rest})=>({
            ...rest,
            name:name.toUpperCase(),
            processedAT :new Date().toISOString()
        }));
       
        const outputText = JSON.stringify(updateUser,null,2);
        await writeFile("./output.json",outputText);
        console.log("Successfully all done ...");
    }catch(error){
        console.log("Something Went wrong ....." + error.message);
    }
}
ProcessData();