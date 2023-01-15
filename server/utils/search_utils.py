def get_id_from_partial_name(partial=None, dataset=None):
    if dataset is None:
        raise Exception("Dataset is not defined")

    all_books_names = list(dataset.title.values)

    found_books_index = []

    for name in all_books_names:
        if partial.casefold() in name.casefold():
            found_books_index.append(all_books_names.index(name))

    return dataset.loc[found_books_index]
