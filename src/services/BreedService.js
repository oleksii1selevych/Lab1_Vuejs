export default class BreedService {

    constructor(){
        this.apiRoute = import.meta.env.VITE_BREED_API;
    }

    async getAllBreedsAsync(){
        try {

            let response = await fetch(this.apiRoute);
            
            if(!response.ok){
                let error = `Some error happened while executing the request. Code --> ${response.status}`;
                throw new Error(error);
            }

            let results = await response.json();
            return results.message;

        } catch(error){
            console.log(error);
        }

    }
}