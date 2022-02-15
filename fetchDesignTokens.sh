#!/usr/bin/env bash
TOKENS_URL=https://djilano781024.invisionapp.com/dsm-export/djilanos-team/test/tokens-style-dictionary.zip
ICONS_URL=https://djilano781024.invisionapp.com/dsm-export/djilanos-team/test/icons.zip
API_KEY=c2e2df80c42935e849b92ade29885024
TMP_DIR=tmp
ZIP_FILE=$TMP_DIR/dsm-style-dictionary.zip
ZIP_ICONS_FILE=$TMP_DIR/icon_package.zip

# Create temporary dir.
mkdir -p $TMP_DIR

# Download and unzip property files.
curl -H "X-API-KEY: $API_KEY" $TOKENS_URL --output $ZIP_FILE
unzip $ZIP_FILE -d $TMP_DIR


curl -H "X-API-KEY: $API_KEY" $ICONS_URL --output $ZIP_ICONS_FILE
unzip $ZIP_ICONS_FILE -d $TMP_DIR

node iconsToJson.js
node moveDesignTokens.js

# Create styles.
# style-dictionary build --config sd.config.cjs

Clean up temporary dir.
rm -rf $TMP_DIR