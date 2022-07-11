<script setup lang="ts">
import { provideVSCodeDesignSystem, vsCodeTextField } from '@vscode/webview-ui-toolkit';

provideVSCodeDesignSystem().register(vsCodeTextField());

function handleHowdyClick() {}
</script>

<template>
  <vscode-text-field placeholder="Search Extensions in Marketplace">Howdy!</vscode-text-field>
</template>
