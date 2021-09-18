import {createServer, Factory, Model} from "miragejs";
import {RestSerializer} from "miragejs";
import faker from "faker"
import {normalize} from "./normalize";

let ApplicationSerializer = RestSerializer.extend({
    root: false, embed: true, serializeIds: 'always'
})

export const createMockServer = () => {
    return createServer({
        environment: "development",
        models: {
            user: Model.extend()
        },
        seeds(server) {
            server.createList('user', 200)
        },
        factories: {
            user: randomUsers
        },
        serializers: {
            application: ApplicationSerializer,
            user: ApplicationSerializer.extend({
                normalize(json) {
                    return normalize(this.schema, 'user', json)
                }
            })
        },
        routes() {
            this.resource("users", { path: "/api/users", timing: 500 })
        }
    })
}

export const randomUsers = Factory.extend({
    username() {
      return faker.internet.userName()
    },
    firstName() {
        return faker.name.firstName()
    },
    lastName() {
        return faker.name.lastName()
    },
    image() {
        return faker.image.avatar()
    },
    address() {
        return faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.state()
    },
    password() {
        return faker.internet.password()
    },
    email() {
        return faker.internet.email()
    },
    contact() {
        return faker.phone.phoneNumber()
    }
})