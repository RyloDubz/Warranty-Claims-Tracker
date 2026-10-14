
console.log("Warranty Claim Tracker script loaded successfully.");

const form = document.getElementById("claimForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  statusMessage.textContent = "Form ready for processing rules.";
  statusMessage.style.color = "blue";
});

const message = document.getElementById("message");
const claimsList = document.getElementById("claimsList");

const claim = {
    id: 1,
    category: "Repair",
    status: "Open",

    customer: {
        name: "John Smith",
        email: "john@example.com"
    },

    productCode: "TV101",
    description: "Television screen is damaged",

    updateStatus: function(newStatus) {
        this.status = newStatus;
    }
};

// Change the claim status
claim.updateStatus("Pending");

// Display the claim
const details = document.createElement("div");
details.className = "claim";

details.textContent =
    "Claim ID: " + claim.id +
    " | Customer: " + claim.customer.name +
    " | Email: " + claim.customer.email +
    " | Category: " + claim.category +
    " | Product: " + claim.productCode +
    " | Description: " + claim.description +
    " | Status: " + claim.status;

claimsList.appendChild(details);

message.textContent = "Claim displayed successfully.";

console.log(claim)


const claimsList =document.getElementById("claimsList");
const filter = document.getElementById("filter")


const claims = [
    { id: 1, name: "John", category: "Repair", status: "Open" },
    { id: 2, name: "Mary", category: "Refund", status: "Pending" },
    { id: 3, name: "Peter", category: "Replacement", status: "Open" },
    { id: 4, name: "Sarah", category: "Repair", status: "Pending" }
];

function displayClaims(){
claimsList.textContent ="";

const selectedCatergory = filter.ariaValueMax;

const filteredClaims = claims.filter(function(claim) {

  return selectedCatergory === "All" ||
  claim.category===selectedCatergory
});

filteredClaims.forEach(function)(claim){

  const item = document.createElement("p")


        item.textContent =
            "ID: " + claim.id +
            " | Name: " + claim.name +
            " | Category: " + claim.category +
            " | Status: " + claim.status;

        claimsList.appendChild(item);
    };
}

// Update list when filter changes
filter.addEventListener("change", displayClaims);

// Show all claims initially
displayClaims();

const claimForm = document.getElementById("claimForm");
const message = document.getElementById("message");
const claimsList = document.getElementById("claimsList");

const claims = [];

claimForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const productCode = document.getElementById("productCode").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    // Check required fields
    if (!name || !email || !productCode || !category || !description) {
        message.textContent = "Please complete all fields.";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    // Create a claim object
    const claim = {
        id: claims.length + 1,
        category: category,
        status: "Open",








  
const claimForm = document.getElementById("claimForm");
const message = document.getElementById("message");
const claimsList = document.getElementById("claimsList");

const claim = []

claimFormaddEventListener("submit", function(event){
event.preventDefault()

try{

  const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const productCode = document.getElementById("productCode").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

}

        // Validate fields
        if (!name || !email || !productCode || !category || !description) {
            message.textContent = "Please complete all fields.";
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message.textContent = "Please enter a valid email.";
            return;
        }

        // Additional business rule
        if (description.length < 10) {
            throw new Error("Description must be at least 10 characters.");
        }

        // Create claim
        const claim = {
            id: claims.length + 1,
            category: category,
            status: "Open",
            customer: {
                name: name,
                email: email
            },
            productCode: productCode,
            description: description
        };

        claims.push(claim);

        const item = document.createElement("p");
        item.textContent =
            "Claim #" + claim.id + " | " +
            claim.customer.name + " | " +
            claim.category + " | " + claim.status;

        claimsList.appendChild(item);

        message.textContent = "Claim submitted successfully.";
        claimForm.reset();

    } catch (error) {
        message.textContent = "Error: " + error.message;
        console.error(error);

    } finally {
        console.log("Processing complete.");
    }
});
