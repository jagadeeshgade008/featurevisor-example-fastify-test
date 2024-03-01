// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Featurevisor SDK
const { createInstance } = require("@featurevisor/sdk");
const DATAFILE_URL = "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";
const REFRESH_INTERVAL = 60 * 5; // every 5 minutes

const f = createInstance({
    datafileUrl: DATAFILE_URL,

    // optionally refresh the datafile every 5 minutes,
    // without having to restart the server
    refreshInterval: REFRESH_INTERVAL,
});

// Declare a route
/*
    fastify.get('/', async (request, reply) => {
        const featureKey = "my_feature";
        const context = { userId: "123", country: "nl" };

        const isEnabled = f.isEnabled(featureKey, context);

        if (isEnabled) {
            reply.send("Hello World!");
        } else {
            reply.send("Not enabled yet!");
        }
    })
*/

// with middleware



// Run the server!
const start = async () => {
    fastify.listen({ port: 3000 }, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    })
}
start()