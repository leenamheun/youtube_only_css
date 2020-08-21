function createCard() {
  $.getJSON("./resources/data.json", function (data) {
    console.log(data);
    var items = [];

    $.each(data.items, function (key, val) {
      console.log(val);
      items.push(
        `<article class="cardItem">
            <div class="card">
                <img class="thumbnail" src="${val.snippet.thumbnails.high.url}">
            </div>
            <div class="description">
                <div class="uploadIcons">
                    <img class="uploader-icon" src="https://github.com/dev4us/source_warehouse/blob/master/images/avatar.png?raw=true">
                </div>
                <div class="videoInfo">
                    <div class="video-title">
                        ${val.snippet.title}
                    </div>
                    <div class="video-badge">
                        ${val.snippet.channelTitle}· 조회수 100회 · 3일 전
                    </div>
                </div>
                <div class="moreButton">
                    <svg viewBox="0 0 24 24" fill="" class="more-icon"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </div>
            </div>
        </article>`
      );
    });

    $("<div/>", {
      class: "card-list",
      html: items.join("")
    }).appendTo(".main");
    
  });
}

createCard();
