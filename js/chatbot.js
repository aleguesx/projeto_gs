  window.watsonAssistantChatOptions = {
    integrationID: "61cb1b14-6715-4f55-8954-c1cd64377d43",
    region: "au-syd",
    serviceInstanceID: "07cd34ea-404b-4219-9c3e-62ac655633a3",
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });