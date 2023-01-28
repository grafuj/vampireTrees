class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numVamp = 0;
    let ourVamp = this;
    while (ourVamp.creator) {
      numVamp++;
      ourVamp = ourVamp.creator;
    }
    return numVamp;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let me = this;
    let myCount = 0;
    let vampCount = 0;
    while (me.creator) {
      myCount++;
      me = me.creator;
    }
    while (vampire.creator) {
      vampCount++;
      vampire = vampire.creator;
    }
    if (myCount < vampCount) {
      return true;
    }
    return false;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let myVampire = this;
    if (myVampire.name === name) { //name matches
      console.log('found vampire named:', myVampire.name);
      return myVampire;
    }
    for (const subVampire of this.offspring) {
      const subVamp = subVampire.vampireWithName(name);
      // console.log(subVamp)

      if (subVamp) {
        console.log('found a vampire');
        return subVamp;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendents = 0; // our counter
    if (this.offspring.length) {
      totalDescendents += this.offspring.length;
    }
    for (const subVamp of this.offspring) {
      const vampiresUnder = subVamp.totalDescendents;
      totalDescendents += vampiresUnder;
      console.log('totalDescendents:', totalDescendents);
    }
    return totalDescendents;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialCount = [];
    if (this.yearConverted > 1980) {
      millenialCount.push(this.name);
    }
    for (const subVamp of this.offspring) {
      const vampiresUnder = subVamp.allMillennialVampires;
      millenialCount = millenialCount.concat(vampiresUnder);
      // console.log(millenialCount);
    }
    return millenialCount;
  }
}

module.exports = Vampire;
