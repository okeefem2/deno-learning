# Deno

console.table(Deno.metrics()); gives info about the communication be JS and Rust
Deno has the whole browser window api out of the box
Has first class TS support
ES module support
Security first - Deno creates an environment with security rules where it will block scripts from accessing resources unless you specifically allow.
Scripts can be loaded via url, which allows for decentralized modules
Has a standard library

deno install --name deno-permissions --allow-env permissions.ts will compile and install it to the path

imports require file extension

lock.json can be used for caching deps

deno cache --lock=lock.json

deps.ts is a best practice for tracking all deps of a project, basically you import all deps there, and export them

formatter uses prettier


