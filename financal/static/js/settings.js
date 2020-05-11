function hideVisibility(item){
    item.css({
      "visibility":"hidden",
    }).animate({"opacity": "0"},300);;
  }
  function visibility(item){
    item.css({
      "visibility":"visible",
    }).animate({"opacity": "1"},300);;
  }
  
  function hideVisibilityCss(item){
    item.css({
      "visibility":"hidden",
      "opacity": "0",
    })
  }
  function visibilityCss(item){
    item.css({
      "visibility":"visible",
      "opacity": "1",
    })
  }


  function colorSecondary(item){
    item.css({
      "fill":"var(--color-secondary)",
      "color":"var(--color-secondary)",
    });
  }
  function colorPrimary(item){
    item.css({
      "fill":"var(--color-primary)",
      "color":"var(--color-primary)",
    });
  }
  
  let account = $(".accountId");
  let themes = $(".themeId");
  let color = $(".colourId");
  let background = $(".backgroundId");
  let password = $(".passwordId");
  let membership = $(".membershipId");
  let language = $(".languageId")
  colorSecondary($("#accountIcon"))
  colorSecondary($("#accountClick"))
  $("#accountClick").click(function(event){
    visibility(account);
    hideVisibility(themes);
    hideVisibility(color);
    hideVisibility(background);
    hideVisibility(password);
    hideVisibility(membership);
    colorSecondary($("#accountIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#membershipIcon"))
    
    colorSecondary($("#accountClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#membershipClick"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))
    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}
  });
  
  
  $("#themesClick").click(function(event){
    hideVisibility(account);
    visibility(themes);
    hideVisibility(color);
    hideVisibility(background);
    hideVisibility(password);
    hideVisibility(membership);
    colorSecondary($("#themesIcon"))
    colorPrimary($("#accountIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#membershipIcon"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))

    colorSecondary($("#themesClick"))
    colorPrimary($("#accountClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#membershipClick"))

    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}
  });
  
  $("#colourClick").click(function(event){
    hideVisibility(account);
    hideVisibility(themes);
    visibility(color);
    hideVisibility(background);
    hideVisibility(password);
    hideVisibility(membership);
    colorSecondary($("#colourIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#accountIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#membershipIcon"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))

    colorSecondary($("#colourClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#accountClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#membershipClick"))
    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}
  });
  
  
  $("#backgroundClick").click(function(event){
    hideVisibility(account);
    hideVisibility(themes);
    hideVisibility(color);
    visibility(background);
    hideVisibility(password);
    hideVisibility(membership);
    colorSecondary($("#backgroundIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#accountIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#membershipIcon"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))
    colorSecondary($("#backgroundClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#accountClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#membershipClick"))
    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}
  });
  
  $("#passwordClick").click(function(event){
    hideVisibility(account);
    hideVisibility(themes);
    hideVisibility(color);
    hideVisibility(background);
    visibility(password);
    hideVisibility(membership);
    colorSecondary($("#passwordIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#accountIcon"))
    colorPrimary($("#membershipIcon"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))

    colorSecondary($("#passwordClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#accountClick"))
    colorPrimary($("#membershipClick"))
    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}
  });
  
  
  $("#membershipClick").click(function(event){
    hideVisibility(account);
    hideVisibility(themes);
    hideVisibility(color);
    hideVisibility(background);
    hideVisibility(password);
    visibility(membership);
    colorSecondary($("#membershipIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#accountIcon"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))
    colorSecondary($("#membershipClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#accountClick"))

    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}

  });
  $("#closeMenu").click(function(){
    hideVisibility(account);
    hideVisibility(themes);
    hideVisibility(color);
    hideVisibility(background);
    hideVisibility(password);
    hideVisibility(membership);
    visibility($("#settingsHeading"));
    visibility($(".settings__grid-1"));
    hideVisibility($("#closeMenu"))
    hideVisibility(language)
    colorPrimary($("#languageIcon"))
    colorPrimary($("#languageClick"))

    colorPrimary($("#membershipIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#accountIcon"))

    colorPrimary($("#membershipClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#accountClick"))
  });
  

  $("#languageClick").click(function(event){
    hideVisibility(account);
    hideVisibility(themes);
    hideVisibility(color);
    hideVisibility(background);
    hideVisibility(password);
    hideVisibility(membership);
    visibility(language);
    colorPrimary($("#membershipIcon"))
    colorPrimary($("#themesIcon"))
    colorPrimary($("#colourIcon"))
    colorPrimary($("#backgroundIcon"))
    colorPrimary($("#passwordIcon"))
    colorPrimary($("#accountIcon"))
    colorSecondary($("#languageIcon"))


    colorPrimary($("#membershipClick"))
    colorPrimary($("#themesClick"))
    colorPrimary($("#colourClick"))
    colorPrimary($("#backgroundClick"))
    colorPrimary($("#passwordClick"))
    colorPrimary($("#accountClick"))
    colorSecondary($("#languageClick"))
    if (window.matchMedia('(max-width: 40.625em)').matches) {
      hideVisibility($(".settings__grid-1"));
      visibility($("#closeMenu"))
  }
  if (window.matchMedia('(max-width: 32.5em)').matches) {
    hideVisibility($("#settingsHeading"));
}

  });