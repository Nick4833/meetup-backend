import { AppDataSource } from "./data-source"
import app from "./app"

app.listen(4000, () => {
    AppDataSource.initialize().then(async () => {
        console.log("Datasource initialized.");

    }).catch(error => console.log(error))
})

