## as the file name says

to check if the deploy now works.

After following both [this freeCodeCamp tutorial](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/) and trying to activate github actions with a file `nextjs.yml` (automatically created from GitHub > Settings > Pages > Beta Actions > create configuraion).

I've wacthed the progress of that action (repo page, checking the yellow pending dot to open details), then even run a suggested command found in the error of action **Build with Next.js** : `npx --no-install next build` seems to be able to finish a build locally (see std-output below)

```shell
zsh: correct 'next' to '.next' [nyae]? n
   ▲ Next.js 14.1.0


./src/components/card.tsx
49:5  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
118:6  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

./src/pages/product/[id].tsx
16:5  Warning: React Hook useEffect has a missing dependency: 'getProduct'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
32:4  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
 ✓ Linting and checking validity of types
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Collecting page data
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ⚠ Statically exporting a Next.js application via `next export` disables API routes and middleware.
This command is meant for static-only hosts, and is not necessary to make your application static.
Pages in your application without server-side data dependencies will be automatically statically exported by `next build`, including pages powered by `getStaticProps`.
Learn more: https://nextjs.org/docs/messages/api-routes-static-export
 ✓ Finalizing page optimization

Route (pages)                             Size     First Load JS
┌ ○ /                                     1.32 kB        82.4 kB
├   /_app                                 0 B            78.7 kB
├ ○ /404                                  182 B          78.9 kB
├ λ /api/hello                            0 B            78.7 kB
├ ○ /cart                                 1.32 kB        82.4 kB
├ ○ /product/[id]                         658 B          79.4 kB
└ ○ /success                              258 B            79 kB
+ First Load JS shared by all             78.7 kB
  ├ chunks/framework-5429a50ba5373c56.js  45.2 kB
  ├ chunks/main-b6eaf37bea1163a2.js       31.8 kB
  └ other shared chunks (total)           1.73 kB

○  (Static)   prerendered as static content
λ  (Dynamic)  server-rendered on demand using Node.js

```

SO, I'm going to check if this works, by committin-pushing this simple file here on remote repo.

It still gets an error during the build in the Actions.

So I decided to prove the [basic steps of using just `gh-pages`](https://blog.seancoughlin.me/deploying-to-github-pages-using-gh-pages). But of course on the github settings I switched the source of `Build and deployment`from **GitHub Actions** **Deploy from a branch**, which JUST GAVE ME a static page, which cannot be generated dynamically (it can't even show the Product Cards without the fetched details from API).

So, I switched back to select **GitHub Actions**, and decided to remove the two scripts adviced to use the static "gh-pages" branch

```json
		"predeploy": "next build",
		"deploy": "gh-pages -d out",
```
