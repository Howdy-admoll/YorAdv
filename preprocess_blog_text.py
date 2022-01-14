import test_yoruba_diacritic_removal as text_utils

# smart split lines at ","
text_utils.split_out_corpus_on_symbol('theyorubaadverbial_dot_com.raw.txt',
                                      'theyorubaadverbial_com.txt',
                                      ',')