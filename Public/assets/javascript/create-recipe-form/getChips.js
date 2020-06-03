const getChips = target => {

    const chipTarget = M.Chips.getInstance($(target));

    // converts object to array with chip text
    const chipsDataArray = chipTarget.chipsData.map(chipObject => chipObject.tag)

    return chipsDataArray
}