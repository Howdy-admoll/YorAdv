import glob
import re


def main():
    # create file with cat chapters/* > adverbial_ede_yoruba.txt
    # manually remapped '.)'-> ')' and '..'->'.'
    fp = open("adverb_ede_yoruba.raw.txt")
    data = fp.read()
    data = re.sub("[\(].*?[\)]", "", data)  # remove stuff in parens

    # 1) split on periods, remove single/double quotes, line break on ;?
    with open("adverbial_ede_yoruba.raw1.txt", 'w', encoding='utf-8') as f:
        for utt in data.split('.'):
            utt = utt.replace(';', '\n').replace('?', '\n') # break on ;?
            utt = utt.replace('“', '').replace('”', '').replace('‘', '').replace('’', '')  # remove quotes
            f.write(utt.strip(" ") + "\n")

    # use Ìrànlọ́wọ́
    # 2) smart split lines at ":"
    # text_utils.split_out_corpus_on_symbol('adverbial_ede_yoruba.raw1.txt',
    #                                       'adverbial_ede_yoruba.raw2.txt',
    #                                       ':')

    # 3) finally remove last-remaining :, ,
    lines = tuple(open("adverbial_ede_yoruba.raw2.txt", 'r'))
    with open("adverbial_ede_yoruba.txt", 'w', encoding='utf-8') as f:
        for line in lines:
            utt = line.replace(':', '').replace('.', '')
            f.write(utt.strip(" "))


def write_single_file(path_string, output_path_string):
    with open(output_path_string, 'w') as output_file:
        for x in glob.glob(path_string, recursive=True):
            with open(x, "r") as f:
                for line in f:
                    output_file.write(line + '\n')


if __name__ == "__main__":

    write_single_file('/yoruba-text/adverbial/**/*.txt', "/yoruba-text/adverbial.txt")
    write_single_file('/yoruba-text/adverbial/**/*.txt', "/yoruba-text/adverbial.txt")

    # main()

