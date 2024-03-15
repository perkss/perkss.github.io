import React from 'react';

const Storage = () => (

    <div>

        <h2>Distributed Storage</h2>

        <h3>Data Structures</h3>

        <h4>B Tree</h4>

        <p>B Tree is the classic approach used in databases storage engines. B Tress keep key value pairs sorted by a
            key. This approach stores data as fixed size blocks or pages. Each page with actual data in can be
            referenced by an address. The higher levels of the tree keep a reference to certain references and its
            ordered so you can navigate down the tree for the key you are looking for. For example looking for reference
            251 the top level of the tree which is one dedicated page keeps reference to several child pages say 100,
            then 200, then 300 and so on. We know we are in the
            200 to 300 block so navigate to the 200 and then traverse to find out 251 reference. This process can grow
            deeper and deeper as required.</p>

        <p>When inserting you look through the references find the page and then write into the correct page. If there
            is no space in this page you split the page and create a new reference in the parent node of the page to
            point to the 2 pages.</p>

        <p>B Trees when compared to the below LSM approach are said to be faster to reads but LSM trees are faster for
            writes.</p>

        <p><b>Resiliency</b> a write ahead log (WAL) records all modifications to the database and if it crashes it is
            replayed from the last state to ensure that no modifications are lost.</p>

        <h4>Sorted String Tables (SSTable) and Log Structured Merge Tree (LSM)</h4>

        <p>A SSTable is as it sounds its a table structure where the keys are ordered. Therefore we cannot append in any
            order we can only append in sorted order. Therefore we use a in memory structure to maintain this order and
            then write to disk. This structure allows simple lookup with sparse keys as we know the table is ordered so
            if we index spare keys say Stuart and Tom, and we are looking for Tammy we know it will be between Stuart
            and Tom in the SSTable. Merging is also simpler as we can do a merge of two SSTables using an approach
            similar to the merge part of merge sort. Take each SSTable then ready from the beginning of each and merge
            in the ordered result into the new SSTable. These files can be variable size.</p>

        <p>The approach of LSM is very popular in newer databases that are not traditional relational databases. The
            process works by when a write comes into the DB engine it is written into a mem table (usually a sorted tree
            structure or skip list). When the memtable gets too large for memory flush it to disk in the SSTable. This
            is efficient as the memtable already has the keys in sorted order. Whilst this flush happens the write
            continue to a new memtable.</p>

        <p>Making read requests using this storage design goes as follows try find key in the memtable as most recent
            place, and in memory so fast. Otherwise look into the most recent SSTable and continue to the next and so on
            until found. A bloom filter can optimise this by stating if the key is definitely not in the store.
        </p>

        <p>Cleaning up overwritten or deleted keys or old data is done via compaction from time to time and the tables
            can be merged
            into new ones that are more optimised.</p>

        <p><b>Resiliency</b> what if the in table memtable is lost as a server crashes before flushing to disk. We keep
            a write ahead log (WAL) file that will write every command applied immediately to disk for recovery. This
            log is not kept in sorted order but does not matter as it is not usually used only for recovery.</p>

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