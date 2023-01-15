import gc
import pickle


def find_similar_books(id=None, dataset=None):
    if dataset is None:
        raise Exception("Dataset is not defined")

    found_books = []

    gc.disable()
    indices = pickle.load(open("utils\knn_recommendation_model.pkl", "rb"))
    gc.enable()

    if id:
        for item in indices[id].flatten().tolist():
            print(item)
            found_books.append(item)

        return dataset.loc[found_books]
