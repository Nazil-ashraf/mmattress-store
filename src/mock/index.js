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
            user: Model.extend(),
            mattress: Model.extend()
        },
        seeds(server) {
            server.createList('user', 200)
            server.createList('mattress', 200)
        },
        factories: {
            user: randomUsers,
            mattress: randomMattresses,
        },
        serializers: {
            application: ApplicationSerializer,
            user: ApplicationSerializer.extend({
                normalize(json) {
                    return normalize(this.schema, 'user', json)
                }
            }),
            mattress: ApplicationSerializer.extend({
                normalize(json) {
                    return normalize(this.schema, 'mattress', json)
                }
            })
        },
        routes() {
            this.resource("users", { path: "/api/users", timing: 500 })
            this.resource("mattresses", {path: "/api/mattresses", timing: 500})
        }
    })
}

export const randomMattresses = Factory.extend({
    description() { return faker.lorem.paragraph() },
    image() { return faker.image.abstract() },
    size() { return faker.random.arrayElement(["single","double","queen","king"]) },
    type() { faker.random.arrayElement(["medicated", "ortho"]) },
    color() { return faker.internet.color() },
    price() { return faker.finance.amount() },
    height() { return faker.datatype.number({'min': 30, 'max': 100}) },
    layers() { return faker.datatype.number({'min': 2, 'max': 5}) },
    comfort() { faker.random.arrayElement(["form","soft","cotton"]) }
})

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