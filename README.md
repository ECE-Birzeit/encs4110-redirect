<a href="https://encs4110.birzeit.me"><img src="https://raw.githubusercontent.com/ECE-Birzeit/encs4110/main/docs/public/og.png" alt="ENCS4110 Computer Design Laboratory" width="100%"></a>

# ENCS4110 · Old domain redirect

Redirects the old domain, `encs4110.me`, to [encs4110.birzeit.me](https://encs4110.birzeit.me). Paths are kept, so `encs4110.me/experiments/5` goes to `encs4110.birzeit.me/experiments/5`.

Apps installed from the old domain always open the old domain, so they can't use the new site's offline copy. Inside such an app the page doesn't redirect: it explains how to remove the app and install it again from the new domain, and keeps that notice saved so it also shows offline.

**[Open the manual](https://encs4110.birzeit.me)** · [Site source](https://github.com/ECE-Birzeit/encs4110) · [All labs](https://birzeit.me)

## Files

| Path | Contents |
|:--|:--|
| `index.html` | Redirects to the same path on the new domain; inside an installed app, shows how to reinstall from the new domain |
| `404.html` | Copy of `index.html` for deep links, which GitHub Pages serves as 404s |
| `sw.js` | Clears the old site's caches for returning visitors, and keeps the reinstall notice saved for offline use |
| `CNAME` | `encs4110.me` |

Served by GitHub Pages from `main`. There is no build step.

## Contributing

Problems with the manual itself belong in [encs4110](https://github.com/ECE-Birzeit/encs4110/issues/new/choose). See the [contributing guide](https://github.com/ECE-Birzeit/.github/blob/main/CONTRIBUTING.md).

## License

[MIT](LICENSE) © Mohammad Abu-Shelbaia. The Birzeit University name and logo are the university's; they are not licensed here.

---

<sub>Part of [ECE Labs](https://birzeit.me) · Maintained by [Mohammad Abu-Shelbaia](https://github.com/mabushelbaia)</sub>
