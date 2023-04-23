describe("search and showSuggestions", function () {
  it("shows suggestions based on input, and each suggestion adds a new li", function () {
    const input = document.querySelector("#fruit");
    input.value = "sal";
    search("sal");
    const suggestions = document.querySelectorAll(".suggestions ul li");
    console.log(suggestions);
    expect(suggestions.length).toBe(2);
  });
});

describe("useSuggestion", function () {
    
  it("should populate the input field with the name of the fruit that was clicked", function () {
    let input = document.querySelector("#fruit");
    search("sal");
    const suggestions = document.querySelectorAll(".suggestions ul li");
    console.log(suggestions);
    const selected = document.querySelector(".suggestions ul li");
    useSuggestion({ target: selected });
    let newVal = input.value;
    expect(newVal).toBe("salmonberry");
  });
});
