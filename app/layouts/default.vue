<template>
  <div>
    <ClientOnly><BackgroundNebulaBackground /></ClientOnly> 
    <UiNavbar /> 
    <main><slot /></main>
    <UiFooter /> 
  </div>
</template>
