/** removeInitialChips()
 * Call back function for materialize onChipAdd option
 * Removes specified placeholder chips when user inputs their first chip
 * @param {String} - jQuery target of the chip element
 * @param {Array<String>} initialChips - an array of strings targeting the text of the chips you want to initially remove
 */
const removeInitialChips = (target,initialChips) => {
    
    return () => {
        const chipTarget = M.Chips.getInstance($(target));

        for (let index = 0; index < initialChips.length; index++) {
            // get's the chips from the target
            const chips = chipTarget.chipsData.map(chipObject => chipObject.tag)
            // see if an initialChip matches
            const chipIndex = chips.indexOf(initialChips[index]);
            
            if (chipIndex !== -1 ) {
                // if so delete it
                chipTarget.deleteChip(chipIndex);
            }
        }
    }
}