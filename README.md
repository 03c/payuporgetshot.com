# payuporgetshot.com

Marketing site for **National Credit Recovery** (fictional debt collection agency), built with [React Router 7](https://reactrouter.com/) and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy

```bash
npm run check    # Typecheck, production build, wrangler dry-run
npm run deploy   # Requires wrangler login
```

Worker name is configured in `wrangler.json` as `payuporgetshot-web`.

## Domain on Cloudflare

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/), add the zone **payuporgetshot.com** (or connect it if the registrar supports Cloudflare registrar integration).
2. Update nameservers at your registrar to the pair Cloudflare shows for the zone.
3. After `npm run deploy`, open the Worker → **Settings** → **Domains & Routes** → **Add** → **Custom Domain**, and add `payuporgetshot.com` and `www.payuporgetshot.com`. Cloudflare will create the proxied DNS records.

If the zone was not in this Cloudflare account before, complete zone setup first; custom domains only attach to zones you control in the same account (or use [CNAME setup](https://developers.cloudflare.com/dns/zone-setups/partial-setup/) for partial zones).
