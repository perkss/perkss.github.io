import React from 'react';

const Storage = () => (

    <div>

        <h2>Distributed Storage</h2>

        <h3>Logs</h3>

        <h3>Data Structures</h3>

        <h2>Serialization</h2>

        <h3>Avro</h3>

        <p>Avro is a schema based serialization format that enables efficient data storage because you always provide a
            schema
            on read and write of the data you can remove the keys of the data structure from being stored. Think how
            much duplicated data is stored in JSON if you save it down into Kafka, each key on each message. Avro
            removes the keys so you save a lot of space. It also makes messages smaller to send of the network saving
            bandwidth. Avro gets mixed closely with the Confluent Schema Registry when associated with Kafka. Avro it
            self provides an API for writing to bytes and reading from bytes where you must provide a schema. On the
            reader side you can provide the reader schema and the writer schema so that you can have compatibility
            between newer versions of the schema if you follow certain rules of schema evolution. The Apache Avro docs
            explain this clearly so I leave this to you to <a
                href={"https://avro.apache.org/docs/current/spec.html#Schema+Resolution"}>read</a>.</p>

        <p>What does the Confluent Schema Registry provide then you may ask, well you need access to the schemas and the
            schema registry is basically a rest service where you can put schemas and they are versioned with a unique
            monotonically increasing id. When you write using the KafkaAvroSerializer data it will give the message an
            ID on the first write of that schema, post it to the schema registry and cache the schema on the writer
            side. The serialized byte message sent by this serializer will start with a Magic Byte for technical reasons
            followed by the id of the schema and then the actual message.</p>

        <p>On the consumer side if the consumer has not cached the schema already from the schema registry it will read
            the serialized message know that the first few bytes will be an id, after detecting the Magic Byte and then
            GET from the schema registry the schema for this id. It will then cache this schema so it will have it for
            every message after.</p>

        <p>When a producer detects a new schema in the KafkaAvroSerializer it will increase the id and then POST to the
            schema registry the new schema. And the process of checking the id and getting the schema happens on the
            consumer side again being cached.</p>

        <p>As mentioned before the reader side can have the reader and writer schema give so you can update the schema
            and this can be provided by the schema registry for compatibility. This is well documented by Confluent
            please <a href={"https://docs.confluent.io/platform/current/schema-registry/avro.html"}>read.</a></p>

    </div>


);

export default Storage;