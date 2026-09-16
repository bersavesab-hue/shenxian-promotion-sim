#!/bin/bash
set -e
cd "$(dirname "$0")"
./gradlew :app:assembleDebug
