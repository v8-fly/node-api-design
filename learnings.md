Reset Prisma DB

npx prisma migrate reset

morgan is a middleware that logs request

Whst is MiddleWare ?
Middle ware is something which sits between your routes and actual handler

What si JWT ?
Take a Javascript Object , Javascript Object given a secret , can determenistically converted
to some random string
And on return that string can be converted to same Object given a secret

Object (with secret infused) => random string

random string (with secret ) => Front end > Object

Where to store JWT ?
On client mainly cookies (automatically sent always)
On Server authorizartion header

PRISMA STUDIO
npx prisma studio

Our handlers >>
Remember that should be only be business logic
Rest should be middleware
