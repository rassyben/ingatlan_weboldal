# Ingatlanértékbecslési és -közvetítői weboldal (Next.js)

## Mi van kész
Főoldal, értékbecslés, ingatlanközvetítés, eladó ingatlanok (szűrő + adatlap), bemutatkozás, kapcsolat, jogi minta oldalak, sitemap, robots, validált űrlapok (React Hook Form + Zod). A tartalom helyőrző: cserélje a `lib/site.ts` és `lib/properties.ts` fájlokban.

## Még hiányzik (következő lépések)
shadcn/ui komponensek (`npx shadcn@latest init`), valódi fotók (`public/` + `next/image`), strukturált adatok (JSON-LD), oldalankénti Open Graph kép, e-mail küldés az `app/api/inquiry/route.ts`-ben, admin felület, blog, kalkulátor, Google Analytics, ÁSZF.

## 1. Programok telepítése
Node.js LTS (nodejs.org) és Git (git-scm.com).

## 2. Helyi indítás
```
npm install
npm run dev
```
Megnyitás: http://localhost:3000

## 3–4. GitHub repository és feltöltés
Hozzon létre üres repót a github.com-on, majd:
```
git init && git add . && git commit -m "Első verzió"
git branch -M main
git remote add origin https://github.com/FELHASZNALO/REPO.git
git push -u origin main
```

## 5–7. Vercel
1. vercel.com → Sign up → Continue with GitHub (ingyenes Hobby csomag).
2. Add New → Project → válassza ki a repót → Deploy.
3. Elkészül a `*.vercel.app` tesztcím. Ezt írja be a `lib/site.ts` `url` mezőjébe.
