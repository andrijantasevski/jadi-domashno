# jadidomashno

## Helper scripts

### Generating data

To generate random data for the app in JSON, run the following command:

```bash
$ npm run generatedata
```

### Converting images

Install imagemagick:

```bash
$ sudo apt-get install imagemagick
```

To convert images from .avif to .jpg and maintain all-rightish quality:

```bash
# Make sure we are in the target folder or specify the location better!

mogrify -quality "80%" -format jpg *.avif
```
